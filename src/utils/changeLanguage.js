export const changeLanguage = (lang) => {
    localStorage.setItem('lng', lang)
    window.location.reload()
}