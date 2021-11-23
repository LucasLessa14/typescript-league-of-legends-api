
export function toSlug(text: string): string {
    
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    const to = "aaaaaeeeeeiiiiooooouuuunc------";

    var str = text
        .toLowerCase()
        .replace(/\s+/g, '-')   // Replace spaces with -
        .replace(/^-+/, '')     // Trim - from start of text
        .replace(/-+$/, '')     // Trim - from end of text
    
    for (var i=0, l=from.length ; i<l ; i++) {

        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    
    return str
        .replace(/-+/g, '-')          // Replace multiple - with single -
        .replace(/[^a-z0-9 -]/g, ''); // Remove all non valid chars
}

