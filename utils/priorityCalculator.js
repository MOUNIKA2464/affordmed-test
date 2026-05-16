const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
};

function calculatePriority(notification) {
    return weights[notification.Type] || 0;
}

function getTopNotifications(notifications) {

    return notifications
        .sort((a, b) => calculatePriority(b) - calculatePriority(a))
        .slice(0, 10);
}

module.exports = {
    calculatePriority,
    getTopNotifications
};