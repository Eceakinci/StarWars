const splitUrl = (url) => {
    return 'starships/' + url.match(/[0-9]+/)[0]
}

export default splitUrl