const sessioIdToUserMap = new Map();

function setUser(id, user) {
    sessionIdUserMap.set(id, user);
}

function getUser(id) {
    return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
};