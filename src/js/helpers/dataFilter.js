function filterData(itemsToFilter, callback, amount, page, sort, category, search) {
    var items = itemsToFilter;
    var pageSize = 8;
    var pageIndex = 0;
    var alienSearch = sessionStorage.getItem('alienSearch');
    
    sessionStorage.removeItem('alienSearch');

    items = items.sort(function (a, b) {
        return new Date(a.submitDate) < new Date(b.submitDate) ? 1 : -1;
    });

    if (alienSearch) {
        searchByString(alienSearch);
        populateLocalSearch();
    }
    else if (search) {
        searchByString(search);
    }

    function populateLocalSearch() {
        $(".contentFilter .search input[type='text']").val(alienSearch)

        $(".contentFilter").find('.removeFilterButton').removeClass('hidden')
    }

    function searchByString(searchTerm) {
        var keywordItems = [];

        items.forEach(function (item) {
            if (item.tags) {
                var keywords = item.tags.split(',');
                var matched = false;

                keywords.forEach(function (keyword) {
                    if (keyword.toLowerCase().includes(searchTerm.toLowerCase())) {
                        matched = true;
                    }
                })

                if (matched == true) {
                    keywordItems.push(item);
                }
            }
        })

        items = items.filter(function (item) {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        keywordItems.forEach(function (keywordItem) {
            items.push(keywordItem);
        })
    }

    if (category != "default" && category != null) {
        items = items.filter(function (item) {
            return item.category == category;
        });
    }

    if (sort != "default" && sort != null) {
        if (sort == "submitDate") {
            items = items.sort(function (a, b) {
                return new Date(a.submitDate) > new Date(b.submitDate) ? 1 : -1;
            });
        }
        if (sort == "category") {
            items = items.sort(function (a, b) {
                if (a.category < b.category) {
                    return -1;
                }
                if (a.category > b.category) {
                    return 1;
                }
                return 0;
            });
        }
    }

    if (amount != null) {
        pageSize = amount;
    }
    if (page != null) {
        pageIndex = page;
    }

    sessionStorage.setItem('currentPage', pageIndex);
    sessionStorage.setItem('hasNextPage', pageSize < items.length && pageSize * pageIndex + parseInt(pageSize) < items.length ? true : false);
    sessionStorage.setItem('hasPreviousPage', 0 * pageIndex < pageSize * pageIndex ? true : false)

    $(".mobileCloseFilterButton").text(`View items (${items.length})`)

    items = items.slice(pageIndex * pageSize, pageSize * pageIndex + parseInt(pageSize));

    callback(items);
}