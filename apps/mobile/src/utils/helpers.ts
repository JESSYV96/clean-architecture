export function decodeHtmlEntities(text: string): string {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = text;
    const decodedText = tempElement.textContent || tempElement.innerText || "";
    
    return decodedText;
}