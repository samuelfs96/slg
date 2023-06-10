export const parseDate = (str) => {
    const date = new Date(str)
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`
}