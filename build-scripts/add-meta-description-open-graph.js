var TITLE_DEFAULT = "Dinner Coding Time";
var WEBSITE_ORIGIN = "https://dinnercodingtime.com"

/**
 * 
 * @param {import("./parse-controller").Page} page The page to describe
 */
module.exports = function(page) {
    var description = "Dinner Coding Time";

    var source = page.document.getElementById("source");
    if(source) {
        var text = source.textContent;
        description = text
    } else {
        var paragraph = page.document.getElementsByTagName("p")[0];
        if(paragraph) {
            description = paragraph.textContent;
        }
    }

    description = description.replace(/\r?\n\s+/g, " ").substring(0, 160);

    var metaDescription = findOrCreateMetaElementOfType(page.document, "description");
    if(metaDescription.getAttribute("content") == "") metaDescription.setAttribute("data-autogenerated", "true");

    if(metaDescription.getAttribute("data-autogenerated") == "true") {
        metaDescription.setAttribute("data-autogenerated", "true");
        metaDescription.setAttribute("content", description);
    }

    var metaUrl = findOrCreateMetaElementOfType(page.document, "og:url");
    metaUrl.setAttribute("content", WEBSITE_ORIGIN + page.location.replace(/\/(index)?\.html$/, ""));
    
    var metaTitle = findOrCreateMetaElementOfType(page.document, "og:title");
    var title = (page.document.getElementsByTagName("title")[0] ||
                page.document.getElementsByTagName("h1")[0] || 
                {textContent: TITLE_DEFAULT}).textContent;
    metaTitle.setAttribute("content", title);

    var metaSitename = findOrCreateMetaElementOfType(page.document, "og:site_name");
    metaSitename.setAttribute("content", TITLE_DEFAULT);

    return page;
}

/**
 * 
 * @param {import("./parse-controller").FakeDomNode} document The root document to search in
 * @param {string} type The type of the meta node
 * @returns {import("./parse-controller").FakeDomNode} A meta node with the specified type
 */
function findOrCreateMetaElementOfType(document, type) {
    var typed = document.getElementsByPropertyValue("name", type);
    for(var i = 0; i < typed.length; i++) {
        if(typed[i].nodeName == "meta") return typed[i];
    }

    var head = document.getElementsByTagName("head")[0];
    if(!head) throw "Document is headless :(";

    /**
     * @type {import("./parse-controller").FakeDomNode}
     */
    var meta = document.createElement("meta");
    meta.setAttribute("name", type);
    meta.setAttribute("content", "");
    head.appendChild(meta);

    return meta;
}