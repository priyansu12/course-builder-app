export function store(key, obj) {
    let existingArray = JSON.parse(localStorage.getItem(key)) || [];
    if (!Array.isArray(existingArray)) {
        existingArray = [];
    }
    existingArray.push(obj);
    localStorage.setItem(key, JSON.stringify(existingArray));
}

export function getData() {

    let allData = []
    let modules = localStorage.getItem('modules')
    modules = modules ? JSON.parse(modules) : []
    modules.forEach(module=>allData.push({...module, type: 'module'}))

    let links = localStorage.getItem('links')
    links = links ? JSON.parse(links) : []
    links.forEach(link=>allData.push({...link, type: 'link'}))


    return allData;
}