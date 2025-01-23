# BASE NODE
FROM node:20-slim AS base-node

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base-node AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# BUILD
FROM base-node AS build

ARG VITE_WWW_URL
ARG VITE_DOCS_URL
ARG VITE_DEV_URL
ARG VITE_ADMIN_URL

ENV VITE_WWW_URL=$VITE_WWW_URL
ENV VITE_DOCS_URL=$VITE_DOCS_URL
ENV VITE_DEV_URL=$VITE_DEV_URL
ENV VITE_ADMIN_URL=$VITE_ADMIN_URL

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm run build

# DOC DEV
FROM base-node AS doc-dev

ENV NODE_ENV=production

RUN addgroup --gid 1001 --system nodejs
RUN adduser --system --uid 1001 --ingroup nodejs --home /home/nextjs nextjs

WORKDIR /prod

COPY --from=build /app/apps/dev/public ./public

COPY --from=build --chown=nextjs:nodejs /app/apps/dev/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/apps/dev/.next/static ./apps/dev/.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD HOSTNAME="0.0.0.0" node apps/dev/server.js

# DOC USER
FROM base-node AS doc-user

ENV NODE_ENV=production

RUN addgroup --gid 1001 --system nodejs
RUN adduser --system --uid 1001 --ingroup nodejs --home /home/nextjs nextjs

WORKDIR /prod

COPY --from=build /app/apps/docs/public ./public

COPY --from=build --chown=nextjs:nodejs /app/apps/docs/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/apps/docs/.next/static ./apps/docs/.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD HOSTNAME="0.0.0.0" node apps/docs/server.js

# WEBSITE
FROM base-node AS www

COPY --from=build /app/apps/www/.output /app
EXPOSE 3000
CMD [ "node", "server/index.mjs"]

# ADMIN
FROM base-node AS admin

COPY --from=build /app/apps/admin/.output /app
EXPOSE 3000
CMD [ "node", "server/index.mjs"]

