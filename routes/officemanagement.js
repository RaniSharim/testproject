exports.ShowBranchEntriesForBranch = function (req, res) {
    branch = req.user.Branch;
    var canSeeForwards = true;
    var canChangeForwards = true;
    var canSetStatus = true;
    var canSetStatusToUnmanaged = false;
    var canSetStatusBackToManager = false;
    var canSeeAllBranches = false;
    var canSendPriceOffers = false;

    var title = "ניהול אולם ";
    title += req.user.DisplayName;

     promise.join(logic.GetTodaysEntriesByBranchForBranch(branch),
                 usersLogic.GetSalesInBranch(branch),
                 function(results, forwards) {
                        formatDates(results);
                        asyncRenderer.render(res, { title: title,  branches:[], forwards: forwards, entries: results , showForwards: canSeeForwards, canChangeForwards:canChangeForwards, canSetStatus:canSetStatus, canSetStatusToUnmanaged:canSetStatusToUnmanaged,canSetStatusBackToManager:canSetStatusBackToManager,  canSeeAllBranches:canSeeAllBranches, canSendPriceOffers:canSendPriceOffers  , currentBranch: branch});
                 }
    )
}

