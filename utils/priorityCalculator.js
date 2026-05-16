const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
};

function calculatePriority(notification) {

    return weights[notification.type] || 0;

}

function getTopNotifications(notifications) {

    return notifications
        .map(notification => ({
            ...notification,
            priority: calculatePriority(notification)
        }))
        .sort((a, b) => b.priority - a.priority)
        .slice(0, 10);

}

module.exports = {
    calculatePriority,
    getTopNotifications
};const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
};

function calculatePriority(notification) {

    return weights[notification.type] || 0;

}

function getTopNotifications(notifications) {

    return notifications
        .map(notification => ({
            ...notification,
            priority: calculatePriority(notification)
        }))
        .sort((a, b) => b.priority - a.priority)
        .slice(0, 10);

}

module.exports = {
    calculatePriority,
    getTopNotifications
};