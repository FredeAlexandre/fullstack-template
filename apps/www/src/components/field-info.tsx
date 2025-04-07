import type { AnyFieldApi } from "@tanstack/react-form";

import { cn } from "@acme/ui";

function FieldInfo({ field }: { field: AnyFieldApi }) {
	let content = "Validating...";

	if (field.state.meta.isTouched && field.state.meta.errors.length) {
		content = field.state.meta.errors.join(", ");
	}
	return (
		<div
			className={cn("text-muted-foreground text-xs", {
				invisible:
					!field.state.meta.isValidating ||
					(field.state.meta.isTouched && field.state.meta.errors.length),
			})}
		>
			<em className="text-danger">{content}</em>
		</div>
	);
}

export { FieldInfo };
