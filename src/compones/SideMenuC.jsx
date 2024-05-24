const SideMenuC = ({nombre}) => {
    return (
        <li className="rounded-lg border border-amber-50 m-1">
            <a className="flex gap-4 items-center text-center" href="#">{nombre}</a>
        </li>
    )
}

export default SideMenuC