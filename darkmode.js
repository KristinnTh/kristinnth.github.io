let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
	document.body.classList.add("darkmode");
	localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
	document.body.classList.remove("darkmode");
	localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

// when button clicked execute this code:
themeSwitch.addEventListener("click", () => {
	darkmode = localStorage.getItem("darkmode");
	//if active = true than enableDarkmode else disableDarkmode
	darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
