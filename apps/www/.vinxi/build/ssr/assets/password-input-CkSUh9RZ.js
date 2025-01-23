import{c as d,B as i}from"./button-U5Omqg_X.js";import{EyeIcon as m,EyeClosedIcon as c}from"lucide-react";import*as e from"react";import{I as p}from"./input-i05uZG0N.js";const w=e.forwardRef(({className:r,...a},o)=>{const[s,l]=e.useState(!1),t=a.value===""||a.value===void 0||a.disabled;return e.createElement("div",{className:"relative"},e.createElement(p,{type:s?"text":"password",className:d("hide-password-toggle pr-10",r),ref:o,...a}),e.createElement(i,{type:"button",variant:"ghost",size:"sm",className:"absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",onClick:()=>l(n=>!n),disabled:t},s&&!t?e.createElement(m,{className:"h-4 w-4","aria-hidden":"true"}):e.createElement(c,{className:"h-4 w-4","aria-hidden":"true"}),e.createElement("span",{className:"sr-only"},s?"Hide password":"Show password")),e.createElement("style",null,`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`))});w.displayName="PasswordInput";export{w as P};
