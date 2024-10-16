export default function setCookie(
  name: string,
  value: string,
  mins?: number,
  path?: string
) {
  let expires = "";
  if (mins) {
    const date = new Date();
    date.setTime(date.getTime() + mins * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name + "=" + (value || "") + expires + (path ? "; path=" + path : "");
}
