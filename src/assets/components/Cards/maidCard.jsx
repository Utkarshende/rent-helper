import StarImg from "../../../images/star.png"; 
import StarGreyImg from "../../../images/starGrey.png";

export const CATEGORY_CONFIG = {
    "Deep Cleaning": {
        color: "bg-red-500",
        icon: "🧹",
        description: "Intensive cleaning for tough jobs.",
    },
    "Regular Maintenance": {
        color: "bg-blue-500",
        icon: "🏠",
        description: "Standard daily or weekly upkeep.",
    },
    "Specialized Tasks": {
        color: "bg-purple-500",
        icon: "✨",
        description: "Specific tasks like window or carpet cleaning.",
    },
    "Kitchen Expert": {
        color: "bg-orange-500",
        icon: "🍽️",
        description: "Specializing in kitchen deep cleaning and organization.",
    },
    "Laundry & Ironing": {
        color: "bg-green-500",
        icon: "🧺",
        description: "Focus on washing, drying, and ironing services.",
    },
};

export function CategoryBadge({ category, className, showDescription = false }) {
    const config = CATEGORY_CONFIG[category] || {
        color: "bg-gray-500",
        icon: "❓",
        description: "Category not specified.",
    };

    return (
        <div className={`absolute top-4 left-4 z-10 ${className}`}>
            <span
                className={`inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full text-white shadow-lg ${config.color}`}
                title={config.description}>
                {config.icon} {category}
            </span>
            {showDescription && (
                <p className="mt-1 text-xs text-gray-600 bg-white p-1 rounded">
                    {config.description}
                </p>
            )}
        </div>
    );
}
export default [CATEGORY_CONFIG]