function navs() {
    const nav_div = document.getElementById("navbar")
    nav_div.insertAdjacentHTML("beforebegin",
    `
        <nav>
            <ul class="nav_link_list">
            <li class="nav_link">
                <a href="/" class="nav_link_a">
                    Home
                </a>
            </li>
            <li class="nav_link">
                <a href="about" class="nav_link_a">
                    About
                </a>
            </li>
            <li class="nav_link">
            <a href="contact" class="nav_link_a">
                Contact
            </a>
        </li>
        </nav>
    `
    )
}

navs()