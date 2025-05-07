import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

/**
 * Merges multiple class names or class conditions into a single string.
 *
 * This utility function combines class names, handling conditional classes,
 * and ensuring that Tailwind CSS classes are merged correctly.
 *
 * @param {...string | { [className: string]: boolean } | (string | { [className: string]: boolean })[]} inputs - A list of class names or class conditions.
 * Each argument can be a string, an object with class names as keys and
 * boolean values indicating whether the class should be included, or an
 * array of such values.
 *
 * @returns {string} A string containing the combined class names, with
 * Tailwind CSS classes merged using `tailwind-merge`.
 *
 * @example
 * // Basic usage
 * cn('text-center', 'font-bold');
 * // Output: 'text-center font-bold'
 *
 * @example
 * // Conditional classes
 * cn(true && 'block', false && 'hidden', { 'text-red-500': true, 'text-blue-500': false });
 * // Output: 'block text-red-500'
 *
 * @example
 * // Tailwind CSS class merging
 * cn('bg-red-500', 'bg-blue-500');
 * // Output: 'bg-blue-500' (last one wins in simple conflicts)
 *
 * @example
 * //Using the is-active pattern
 * const isActive = true;
 * cn("p-4 rounded-md", isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700")
 * //Output (if isActive is true): "p-4 rounded-md bg-blue-500 text-white"
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
