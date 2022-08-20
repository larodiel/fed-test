const reportsWidget = {
    options: {
    containerSelector: '.reports',
    template:
        '{{#.}}' +
            '<article class="reports_item">' +
                '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover" role="presentation" width="240" height="300"/>' +
                '<footer class="reports_docs">' +
                    '{{#documents}}' +
                        '<h2 class="reports_title">' +
                            '<a class="reports_title_cta" href="{{url}}" target="_blank" title="{{title}}" download="{{title}}" target="_blank">' +
                                '{{ title }} <span class="reports_file_details">({{ file_size }} {{ file_type }})</span>' +
                            '</a>' +
                        '</h2>' +
                    '{{/documents}}' +
                '</footer>' +
            '</article>' +
        '{{/.}}',
    },
    renderReports: function (reports) {
    const that = this;
    const options = that.options;
    document.querySelector(options.containerSelector).innerHTML =
        Mustache.render(options.template, reports);
    },
    init: function () {
    this.renderReports(reportData || []);
    },
};

reportsWidget.init();
