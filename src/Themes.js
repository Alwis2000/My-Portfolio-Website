function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
      if (localStorageTheme !== null) {
        return localStorageTheme;
      }
    
      if (systemSettingDark.matches) {
        return "dark";
      }
    
      return "light";
    }
    
    /**
    * Utility function to update the button text and aria-label.
    */
    
    /**
    * Utility function to update the theme setting on the html tag
    */
    function updateThemeOnHtmlEl({ theme }) {
      document.querySelector("html").setAttribute("data-theme", theme);
    }
    
    
    /**
    * On page load:
    */
    
    /**
    * 1. Grab what we need from the DOM and system settings on page load
    */
    const button = document.querySelector("[data-theme-toggle]");
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    
    /**
    * 2. Work out the current site settings
    */
    let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
    
    /**
    * 3. Update the theme setting and button text accoridng to current settings
    */
    updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
    updateThemeOnHtmlEl({ theme: currentThemeSetting });
    
    /**
    * 4. Add an event listener to toggle the theme
    */
    button.addEventListener("click", (event) => {
      const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    
      localStorage.setItem("theme", newTheme);
      setTimeout(() => updateButton({isDark: newTheme === "dark" }), 250);
      // updateButton({ buttonEl: button, isDark: newTheme === "dark" });
      updateThemeOnHtmlEl({ theme: newTheme });
    
      currentThemeSetting = newTheme;
    });

    const themePic = document.getElementById('themeIcon');
  
    import sun from "./images/sun.svg";
    import moon from "./images/moon.svg";

    

    function updateButton({ themePic, isDark }) {
      console.log(themePic);
      const newCta = isDark ? moon : sun;
      // // use an aria-label if you are omitting text on the button
      // // and using a sun/moon icon, for example
      themeIcon.setAttribute("src", newCta);
      // buttonEl.innerText = newCta;
    }
    