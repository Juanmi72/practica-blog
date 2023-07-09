import capitalize from "./capitalize.js";
import humanize from "./humanize.js"

export default function humanizeDate($date) {
    const datetime = $date.getAttribute("datetime");
    const humanized = humanize(datetime);
    $date.textContent = capitalize(humanized);
    
}