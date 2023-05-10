
(function ($) {

    'use strict';

    function initMetisMenu() {
        //metis menu
        $("#side-menu").metisMenu();
    }

    function initLeftMenuCollapse() {
        $('#vertical-menu-btn').on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('sidebar-enable');
            if ($(window).width() >= 992) {
                $('body').toggleClass('vertical-collpsed');
            } else {
                $('body').removeClass('vertical-collpsed');
            }
        });

        $('body,html').click(function (e) {
            var container = $("#vertical-menu-btn");
            if (!container.is(e.target) && container.has(e.target).length === 0 && !(e.target).closest('div.vertical-menu')) {
                $("body").removeClass("sidebar-enable");
            }
        });
    }

    function initActiveMenu() {
        // === following js will activate the menu in left side bar based on url ====
        $("#sidebar-menu a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("mm-active"); // add active to li of the current link
                $(this).parent().parent().addClass("mm-show");
                $(this).parent().parent().prev().addClass("mm-active"); // add active class to an anchor
                $(this).parent().parent().parent().addClass("mm-active");
                $(this).parent().parent().parent().parent().addClass("mm-show"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().addClass("mm-active");
            }
        });
    }

    function initMenuItem() {
        $(".navbar-nav a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("active");
                $(this).parent().parent().addClass("active");
                $(this).parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().parent().addClass("active");
            }
        });
    }

    function initMenuItemScroll() {
        // focus active menu in left sidebar
        $(document).ready(function () {
            if ($("#sidebar-menu").length > 0 && $("#sidebar-menu .mm-active .active").length > 0) {
                var activeMenu = $("#sidebar-menu .mm-active .active").offset().top;
                if (activeMenu > 300) {
                    activeMenu = activeMenu - 300;
                    $(".vertical-menu .simplebar-content-wrapper").animate({ scrollTop: activeMenu }, "slow");
                }
            }
        });
    }


    function initDropdownMenu() {
        if (document.getElementById("topnav-menu-content")) {
            var elements = document.getElementById("topnav-menu-content").getElementsByTagName("a");
            for (var i = 0, len = elements.length; i < len; i++) {
                elements[i].onclick = function (elem) {
                    if (elem.target.getAttribute("href") === "#") {
                        elem.target.parentElement.classList.toggle("active");
                        elem.target.nextElementSibling.classList.toggle("show");
                    }
                }
            }
            window.addEventListener("resize", updateMenu);
        }
    }

    function updateMenu() {
        var elements = document.getElementById("topnav-menu-content").getElementsByTagName("a");
        for (var i = 0, len = elements.length; i < len; i++) {
            if (elements[i].parentElement.getAttribute("class") === "nav-item dropdown active") {
                elements[i].parentElement.classList.remove("active");
                elements[i].nextElementSibling.classList.remove("show");
            }
        }
    }

    function datepicker() {

        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }

        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            opens: 'center',
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end);

    };

    // dataTabel 
    function initDataTable() {
        $('#example').DataTable({
            ajax: '/assets/data/arrays.txt',
            responsive: true,
        });
    }

    // map view 
    function initJvectorMap() {
        $('.world-map-markers').vectorMap({
            map: 'world_mill_en',
            backgroundColor: '#fff',

            regionStyle: {
                initial: {
                    fill: '#AAB4C0', // Default region color
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 1
                },
                hover: {
                    "fill-opacity": 0.8 // Region color on hover
                },
                selected: {
                    fill: '#333333' // Region color on selection
                },
                selectedHover: {
                    fill: '#666666' // Region color on selection and hover
                }
            }
        });
    }


    // chart view

    function chartJs() {
        var ctx = document.getElementById('chart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },

            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            fontFamily: 'Open Sans'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontFamily: 'Open Sans'
                        }
                    }]
                }
            }
        });


        var chartInstance = new Chart(chart, {
            type: 'line',
            data: data,
            options: options
        });
    }
    // flot chart
    function initFlot() {
        var data = [
            {
                label: 'Label1',
                color: '#FF0000',
                data: [
                    [new Date('2023-03-01').getTime(), 200],
                    [new Date('2023-03-02').getTime(), 300],
                    [new Date('2023-03-03').getTime(), 400],
                    [new Date('2023-03-04').getTime(), 500]
                ]
            },
            {
                label: 'Label2',
                color: '#00FF00',
                data: [
                    [new Date('2023-03-01').getTime(), 150],
                    [new Date('2023-03-02').getTime(), 250],
                    [new Date('2023-03-03').getTime(), 350],
                    [new Date('2023-03-04').getTime(), 450]
                ]
            },
            {
                label: 'Label3',
                color: '#0000FF',
                data: [
                    [new Date('2023-03-01').getTime(), 100],
                    [new Date('2023-03-02').getTime(), 200],
                    [new Date('2023-03-03').getTime(), 300],
                    [new Date('2023-03-04').getTime(), 400]
                ]
            },
            {
                label: 'Label4',
                color: '#FF00FF',
                data: [
                    [new Date('2023-03-01').getTime(), 50],
                    [new Date('2023-03-02').getTime(), 150],
                    [new Date('2023-03-03').getTime(), 250],
                    [new Date('2023-03-04').getTime(), 350]
                ]
            }
        ];

        var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: 'time',
                timeformat: '%m.%d'
            },
            yaxis: {
                tickFormatter: function (val, axis) {
                    return "$" + val.toFixed(2);
                }
            },
            legend: {
                position: 'nw',
                noColumns: 4,
                container: $('#chartLegend')
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            tooltip: {
                show: true,
                content: '%s : %y'
            }
        };

        var chart = $.plot('#chart', data, options);

        function resizeChart() {
            chart.resize();
            chart.setupGrid();
            chart.draw();
        }

        $(window).resize(function () {
            resizeChart();
        });
    }


    // select 2 
    function initSelect2() {
        $('.multiple-select-field').select2();
        var content = [
            { id: 0, text: "Nitin Shah", email: "Nitin@xy" },
            { id: 1, text: "Suhash Shah ", email: "Suhash@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
            { id: 2, text: "Soumil Shah  ", email: "Soumil@xy" },
        ];

        $(".prompt").select2({
            data: content,
            minimumInputLength: 1,
            width: '100%',
            multiple: true,
            placeholder: "Enter First Name",
            language: {
                inputTooShort: function () {
                    return 'Please Add More Text';
                }
            }
        });
    }

    function init() {
        initMetisMenu();
        initLeftMenuCollapse();
        initActiveMenu();
        initMenuItem();
        initMenuItemScroll();
        initDropdownMenu();
        Waves.init();
        datepicker();
        initDataTable();
        initJvectorMap();
        chartJs();
        initSelect2();
        initFlot();
    }

    $(document).ready(function () {
        init();
    })

})(jQuery)