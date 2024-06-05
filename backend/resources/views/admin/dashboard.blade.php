<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
    background-color: #f8f9fa; /* Light background color */
    color: #212529; /* Dark text color */
}

.dashboard-section {
    background-color: #ffffff; /* White background for sections */
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
}

.menu-section {
    background-color: #e9ecef; /* Light background for menu */
    padding: 10px;
    border-radius: 5px;
    color: #212529; /* Dark text color */
}

.menu-section ul {
    list-style-type: none;
    padding: 0;
}

.menu-section li {
    margin-bottom: 10px;
    background-color: #f8f9fa; /* Light background for menu items */
}

.menu-section a {
    text-decoration: none;
    color: #007bff; /* Blue color for links */
}

.menu-section a:hover {
    color: #0056b3; /* Darker blue on hover */
}

.payment-section {
    background-color: #ffffff; /* White background for payment section */
    padding: 20px;
    border-radius: 5px;
}

.payment-section h2 {
    margin-bottom: 10px;
}

.logout-section {
    background-color: #e9ecef; /* Light background for logout section */
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

.logout-section a {
    text-decoration: none;
    color: #dc3545; /* Red color for logout link */
    font-weight: bold;
}

.logout-section a:hover {
    color: #c82333; /* Darker red on hover */
}

.navbar {
    margin-bottom: 20px;
}

       
.overview-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

@media (max-width: 767px) {
    .overview-wrap {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .overview-wrap .button {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        -moz-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
    }

    .overview-wrap h2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        -moz-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
    }
}

.overview-item {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 30px;
    padding-bottom: 0;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
}

@media (min-width: 992px) and (max-width: 1519px) {
    .overview-item {
        padding-left: 15px;
        padding-right: 15px;
    }
}

.overview-item--c1 {
    background-image: -moz-linear-gradient(90deg, #3f5efb 0%, #fc466b 100%);
    background-image: -webkit-linear-gradient(90deg, #3f5efb 0%, #fc466b 100%);
    background-image: -ms-linear-gradient(90deg, #3f5efb 0%, #fc466b 100%);
}

.overview-item--c2 {
    background-image: -moz-linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
    background-image: -webkit-linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
    background-image: -ms-linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
}

.overview-item--c3 {
    background-image: -moz-linear-gradient(90deg, #ee0979 0%, #ff6a00 100%);
    background-image: -webkit-linear-gradient(90deg, #ee0979 0%, #ff6a00 100%);
    background-image: -ms-linear-gradient(90deg, #ee0979 0%, #ff6a00 100%);
}

.overview-item--c4 {
    background-image: -moz-linear-gradient(90deg, #45b649 0%, #dce35b 100%);
    background-image: -webkit-linear-gradient(90deg, #45b649 0%, #dce35b 100%);
    background-image: -ms-linear-gradient(90deg, #45b649 0%, #dce35b 100%);
}

.overview-box .icon {
    display: inline-block;
    vertical-align: top;
    margin-right: 15px;
}

.overview-box .icon i {
    font-size: 60px;
    color: #fff;
}

@media (min-width: 992px) and (max-width: 1199px) {
    .overview-box .icon {
        margin-right: 3px;
    }

    .overview-box .icon i {
        font-size: 30px;
    }
}

@media (max-width: 991px) {
    .overview-box .icon {
        font-size: 46px;
    }
}

.overview-box .text {
    font-weight: 300;
    display: inline-block;
}

.overview-box .text h2 {
    font-weight: 300;
    color: #fff;
    font-size: 36px;
    line-height: 1;
    margin-bottom: 5px;
}
.dashboard-section.payment-section table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.dashboard-section.payment-section th,
.dashboard-section.payment-section td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.dashboard-section.payment-section th {
    background-color: #f4f4f4;
    color: #333;
    font-weight: bold;
}

.dashboard-section.payment-section tr:last-child td {
    border-bottom: none;
}

.dashboard-section.payment-section tr:hover {
    background-color: #f9f9f9;
}


.overview-box .text span {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
}

@media (min-width: 992px) and (max-width: 1199px) {
    .overview-box .text {
        display: inline-block;
    }

    .overview-box .text h2 {
        font-size: 20px;
        margin-bottom: 0;
    }

    .overview-box .text span {
        font-size: 14px;
    }
}

@media (max-width: 991px) {
    .overview-box .text h2 {
        font-size: 26px;
    }

    .overview-box .text span {
        font-size: 15px;
    }
}



.overview-chart {
    height: 115px;
    position: relative;
}

.overview-chart canvas {
    width: 100%;
}

</style>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
    <a class="navbar-brand" href="#">
        <img src="https://source.unsplash.com/50x50/?male" width="50" height="50" class="rounded-circle" alt="Profile Picture">
        <span class="ml-2">Admin</span>
    </a>
</nav>

                    <div class="row m-t-25">
                            <div class="col-sm-6 col-lg-3">
                                <div class="overview-item overview-item--c1">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-account-o"></i>
                                            </div>
                                            <div class="text">
                                                <h2>{{\App\Models\Product::where('category_id',3)->count()}}</h2>
                                                <span>Number of Home Appliances</span>
                                            </div>
                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="overview-item overview-item--c2">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-shopping-cart"></i>
                                            </div>
                                            <div class="text">
                                                <h2>{{\App\Models\Product::where('category_id',5)->count()}}</h2>
                                                <span>Number of Electronic items</span>
                                            </div>
                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart2"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="overview-item overview-item--c3">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-calendar-note"></i>
                                            </div>
                                            <div class="text">
                                                <h2>{{\App\Models\Product::where('category_id',1)->count()}}</h2>
                                                <span>Number of Phones </span>
                                            </div>
                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart3"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="overview-item overview-item--c4">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-money"></i>
                                            </div>
                                            <div class="text">
                                                <h2> {{ \App\Models\Product::count() }}</h2>
                                                <span>Total of products products</span>
                                            </div>
                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart4"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

<div class="container-fluid">
    <div class="row">
        <!-- Logout Section -->
        <div class="col-md-3" >
            <div class="dashboard-section menu-section" >
                <h2>Menu</h2>
                <ul class="list-group" >
                    <li class="list-group-item"><a href="{{ route('products.create') }}">Create Product</a></li>
                    <li class="list-group-item"><a href="{{ route('products.delete') }}">Delete Product</a></li>
                    <li class="list-group-item"><a href="{{ route('products.modify') }}">Update a Product</a></li>
                    <li class="list-group-item"><a href="{{ route('categories.create') }}">Create Category</a></li>
                </ul>
            </div>
        </div>

        <!-- Graphs Section -->
        <div class="col-md-6">
            <div class="dashboard-section payment-section">
                <h2>Payment Information</h2>
                <!-- Placeholder for payment information -->
                <div id="paymentInfo">
                    <p>Total Revenue: $5000</p>
                    <p>Total Transactions: 100</p>
                </div>
                <!-- Placeholder for payment graphs -->
                <canvas id="paymentGraph" width="400" height="200"></canvas>
            </div>
            <div class="dashboard-section payment-section">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category ID</th>
                    </tr>
                    @foreach($products as $product)
                    <tr>
                        <td>{{ $product->id }}</td>
                        <td>{{ $product->name }}</td>
                        <td>{{ $product->price }}</td>
                        <td>{{ $product->category_id }}</td>
                    </tr>
                    @endforeach
                </table>
            </div>
        </div>

        <!-- Menu Section -->
        <div class="col-md-3">
            <div class="dashboard-section logout-section">
                <a href="https://dashboard.stripe.com/test/customers" style="color:#1a42ba">Customers</a>
            </div>
            <div class="dashboard-section logout-section">
                <a href="https://dashboard.stripe.com/test/balance/overview" style="color:#1a42ba">Soldes</a>
            </div>
            <div class="dashboard-section logout-section">
                <a href="https://dashboard.stripe.com/test/payments" style="color:#1a42ba">Payments</a>
            </div>
            <div class="dashboard-section logout-section">
                <a href="http://localhost:3000/" style="color:#ff7dd7" >Back to Landing</a>
            </div>
            <div class="dashboard-section logout-section">
                <img src="{{ asset('adminPics/admin1.png') }}" width="300"/>
            </div>
        </div>
        

        
</div>

<!-- Bootstrap JS and other JS libraries -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
<script>
    // Function to create a chart with random data
    function createRandomChart(canvasId) {
        var ctx = document.getElementById(canvasId).getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Phones', 'Laptops', 'Home', 'Fashion', 'Electronics'],
                datasets: [{
                    label: 'Number of products',
                    data: [{{\App\Models\Product::where('category_id',1)->count()}},{{\App\Models\Product::where('category_id',2)->count()}}, {{\App\Models\Product::where('category_id',3)->count()}}, {{\App\Models\Product::where('category_id',4)->count()}}, {{\App\Models\Product::where('category_id',5)->count()}}],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Create random charts for each canvas
    createRandomChart('widgetChart1');
    createRandomChart('widgetChart2');
    createRandomChart('widgetChart3');
    createRandomChart('widgetChart4');
</script>
<script>
    // Payment Graph using Chart.js
    var ctx = document.getElementById('paymentGraph').getContext('2d');
    var paymentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Payment Amount ($)',
                data: [500, 700, 600, 900, 800, 1000],
                backgroundColor: ['rgba(255, 0, 0, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(255, 0, 0, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(255, 0, 0, 0.6)', 'rgba(255, 165, 0, 0.6)'],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 165, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 165, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 165, 0, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
</script>

</body>
</html>
