const PageHeading = ({ title, subtitle }) => {
    return (
        <div className="page-heading">
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}

export default PageHeading;
