import DashboardMenu from "./components/dashboardMenu";

const DashboardSection = {
    after_render: () => {

    },
    render: () => {
        return `
        <div class="dashboard">
            ${DashboardMenu.render({selected: 'dashboard'})}
            <div class="dashboard-content">
                <header>
                    <h2>
                        <label for="">
                        <!--the spans will hold the icons-->
                            <span class=""></span>
                        </label>
                        Dashboard
                    </h2>
                    <div class="search-wrapper">
                        <span class="">S</span>
                        <input type="search" placeholder="Search Here"/>                 
                    </div>
                    <div class="user-wrapper">
                        <img src="" width="30px" height="30px" alt="">
                        <div>
                            <h4> chris</h4>
                            <small> super admin</small>
                        </div>
                    </div>
                </header>
                <main>
                    <div class="dashboard-cards">
                        <div class="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Customers</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Products</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Orders</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Sales</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>54Ksh</h1>
                                <span>Income</span>
                            </div>
                            <div>
                                <span class=""></span>
                            </div>
                        </div>
                        <!--add list of new products here-->
                        <div class="recent-grid">
                            <div class="products">
                               <div class="products-card">
                                   <div class="card-header">
                                       <h3> New Products</h3>
                                       <button>See all<span class=""></span></button>
                                   </div>
                                   <div class="card-body">
                                       <table>
                                       </table>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>                    
                </main>
            </div>
        </div>`;
    },
};
export default DashboardSection;