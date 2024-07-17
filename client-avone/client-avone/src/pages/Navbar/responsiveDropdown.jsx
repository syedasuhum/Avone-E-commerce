


const ResponsiveDropdown = ({ dropDown }) => {

    return (
        <div className="responsive-dropdown">
            {

                dropDown.map((value) => {
                    return (
                        <div className="togggle-content-main">{value.title}</div>
                    )
                })
            }
        </div>
    )
}

export default ResponsiveDropdown;
