import{jsx as r,jsxs as e}from"react/jsx-runtime";import{zodResolver as n}from"@hookform/resolvers/zod";import{B as c}from"./button-U5Omqg_X.js";import{F as d,a as l,b as p,c as u,d as h,e as f,f as w}from"./form-YLSo8OmR.js";import{P as b}from"./password-input-CkSUh9RZ.js";import{useForm as F}from"react-hook-form";import{toast as a}from"sonner";import*as m from"zod";import{a as y}from"./auth-client-CfR_Uf3d.js";import"react";import"./input-i05uZG0N.js";import"./index-DXPxg-Qg.js";import"react-dom";import"lucide-react";import"better-auth/client/plugins";import"better-auth/react";const g=m.object({password:m.string().min(8).max(255)}),k=function(){const s=F({resolver:n(g)});async function i(t){try{const{error:o}=await y.resetPassword({newPassword:t.password});o?a.error(o.message):a.success("Your password has been reseted. Redirecting you to sign in page.")}catch(o){console.error("Form submission error",o),a.error("Failed to submit the form. Please try again.")}}return r("div",{className:"flex justify-center items-center h-dvh",children:e("div",{className:"w-[30rem] border p-4 rounded-lg space-y-6",children:[e("div",{className:"space-y-2",children:[r("h1",{className:"font-bold",children:"Reset Passowrd"}),r("p",{className:"text-muted-foreground",children:"Put your new password here"})]}),r(d,{...s,children:e("form",{onSubmit:s.handleSubmit(i),className:"w-full space-y-2",children:[r(l,{control:s.control,name:"password",render:({field:t})=>e(p,{children:[r(u,{children:"Password"}),r(h,{children:r(b,{placeholder:"Placeholder",...t})}),r(f,{children:"Enter a password."}),r(w,{})]})}),r(c,{className:"w-full",type:"submit",children:"Submit"})]})})]})})};export{k as component};
