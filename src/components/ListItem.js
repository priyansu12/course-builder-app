const subHeadings = {
    'module': 'Add items to this module',
    'link': 'Link'
}

const icons = {
    'module': 'down-arrow-dark',
    'link': 'link'
}



export default function ListItem({ index, data }) {
    console.log(data);
    return <li key={index} class="bg-white outline outline-[1.5px] outline-[#EBEBEB] rounded-lg flex items-center justify-between p-4 w-full max-w-3xl mx-auto">
        <div class="flex items-center">
            <button class="text-gray-500 mr-4 p-4">
                <img src={`/icons/${icons[data.type]}.svg`} alt="down-arrow-icon" />
            </button>
            <div>
                <div class="text-lg font-semibold">{data.name}</div>
                <div class="text-gray-500">{subHeadings[data.type]}</div>
            </div>
        </div>
        <button class="text-gray-500 hover:bg-[#F2F2F2] p-4 px-6 rounded-md">
            <img src="/icons/three-dots.svg" alt="down-arrow-icon" />
        </button>
    </li>
}