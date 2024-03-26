export default function FloatingButton() {
    return (
        <div className="fixed bottom-4 right-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-full shadow-lg">
                <a href="#">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
                    </svg>
                </a>
            </button>
        </div>
    );
}