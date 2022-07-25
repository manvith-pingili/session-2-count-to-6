console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
function html(pieces, ...substitutions) {
    let result = pieces[0];
    for(let i=0; i<substitutions.length; i++) {
        result += safe(substitutions[i]) + pieces[i+1];
    }
    return result;
}
function safe(str) {
    return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}