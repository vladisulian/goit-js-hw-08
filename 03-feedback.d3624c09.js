!function(){var e,t,a={form:document.querySelector(".feedback-form"),mail:document.querySelector("input"),textarea:document.querySelector(".feedback-form textarea")};a.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-message")})),a.mail.addEventListener("input",(function(e){var t=e.currentTarget.value;localStorage.setItem("feedback-mail",t)})),a.textarea.addEventListener("input",(function(e){var t=e.currentTarget.value;localStorage.setItem("feedback-message",t)})),e=localStorage.getItem("feedback-message"),t=localStorage.getItem("feedback-mail"),e&&t?(a.textarea.value=e,a.mail.value=t):e?a.textarea.value=e:t&&(a.mail.value=t)}();
//# sourceMappingURL=03-feedback.d3624c09.js.map
