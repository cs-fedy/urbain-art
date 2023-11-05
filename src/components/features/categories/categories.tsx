"use client"

import coatRack from "@/../public/svg/coat_rack.svg"
import desk from "@/../public/svg/desk.svg"
import homeTable from "@/../public/svg/home_table.svg"
import officeChairThin from "@/../public/svg/office_chair_thin.svg"
import roundedDesk from "@/../public/svg/rounded_desk.svg"
import twoDoorsThin from "@/../public/svg/two_doors_thin.svg"
import useClickOutside from "@/hooks/use_click_outside"
import { useMemo, useRef, useState } from "react"
import CategoryItem from "./category_item"
import SubCategories from "./sub_categories"
import { Category } from "./types"

const categories: Record<string, Category> = {
	desks: {
		id: "1",
		tag: "desks",
		title: "Desks",
		link: "/categories/desk",
		image: desk,
		items: [
			{
				id: "1",
				title: "Office Desks",
				tag: "office_desks",
				link: "/categories/desk/office_desks",
			},
			{
				id: "2",
				title: "Computer Desks",
				tag: "computer_desks",
				link: "/categories/desk/computer_desks",
			},
			{
				id: "3",
				title: "Standing Desks",
				tag: "standing_desks",
				link: "/categories/desk/standing_desks",
			},
			{
				id: "4",
				title: "Writing Desks",
				tag: "standing_desks",
				link: "/categories/desk/writing_desks",
			},
			{
				id: "5",
				title: "Executive Desks",
				tag: "executive_desks",
				link: "/categories/desk/executive_desks",
			},
			{
				id: "6",
				title: "Corner Desks",
				tag: "corner_desks",
				link: "/categories/desk/corner_desks",
			},
			{
				id: "7",
				title: "Kids' Desks",
				tag: "kids_desks",
				link: "/categories/desk/kids_desks",
			},
		],
	},
	home_tables: {
		id: "2",
		tag: "home_tables",
		title: "Home tables",
		link: "/categories/home_tables",
		image: homeTable,
		items: [
			{
				id: "1",
				title: "Dining Tables",
				link: "/categories/home_tables/dining_tables",
				tag: "dining_tables",
			},
			{
				id: "2",
				title: "Coffee Tables",
				link: "/categories/home_tables/coffee_tables",
				tag: "coffee_tables",
			},
			{
				id: "3",
				title: "End Tables",
				link: "/categories/home_tables/end_tables",
				tag: "end_tables",
			},
			{
				id: "4",
				title: "Console Tables",
				link: "/categories/home_tables/console_tables",
				tag: "console_tables",
			},
			{
				id: "5",
				title: "Kitchen Tables",
				link: "/categories/home_tables/kitchen_tables",
				tag: "kitchen_tables",
			},
			{
				id: "6",
				title: "Outdoor Tables",
				link: "/categories/home_tables/outdoor_tables",
				tag: "outdoor_tables",
			},
			{
				id: "7",
				title: "Study Tables",
				link: "/categories/home_tables/study_tables",
				tag: "study_tables",
			},
		],
	},
	rounded_desks: {
		id: "3",
		tag: "rounded_desks",
		title: "Rounded desks",
		link: "/categories/rounded_desks",
		image: roundedDesk,
		items: [
			{
				id: "1",
				title: "Circular Desks",
				link: "/categories/rounded_desks/circular_desks",
				tag: "circular_desks",
			},
			{
				id: "2",
				title: "Oval Desks",
				link: "/categories/rounded_desks/oval_desks",
				tag: "oval_desks",
			},
			{
				id: "3",
				title: "Curved Desks",
				link: "/categories/rounded_desks/curved_desks",
				tag: "curved_desks",
			},
			{
				id: "4",
				title: "Semi-Circular Desks",
				link: "/categories/rounded_desks/semi_circular_desks",
				tag: "semi_circular_desks",
			},
			{
				id: "5",
				title: "Arc Desks",
				link: "/categories/rounded_desks/arc_desks",
				tag: "arc_desks",
			},
			{
				id: "6",
				title: "Rounded Corner Desks",
				link: "/categories/rounded_desks/rounded_corner_desks",
				tag: "rounded_corner_desks",
			},
			{
				id: "7",
				title: "Bow Front Desks",
				link: "/categories/rounded_desks/bow_front_desks",
				tag: "bow_front_desks",
			},
		],
	},
	office_chairs: {
		id: "4",
		tag: "office_chairs",
		title: "Office chairs",
		link: "/categories/office_chairs",
		image: officeChairThin,
		items: [
			{
				id: "1",
				title: "Ergonomic Chairs",
				link: "/categories/office_chairs/ergonomic_chairs",
				tag: "ergonomic_chairs",
			},
			{
				id: "2",
				title: "Executive Chairs",
				link: "/categories/office_chairs/executive_chairs",
				tag: "executive_chairs",
			},
			{
				id: "3",
				title: "Task Chairs",
				link: "/categories/office_chairs/task_chairs",
				tag: "task_chairs",
			},
			{
				id: "4",
				title: "Mesh Chairs",
				link: "/categories/office_chairs/mesh_chairs",
				tag: "mesh_chairs",
			},
			{
				id: "5",
				title: "Leather Chairs",
				link: "/categories/office_chairs/leather_chairs",
				tag: "leather_chairs",
			},
			{
				id: "6",
				title: "Conference Chairs",
				link: "/categories/office_chairs/conference_chairs",
				tag: "conference_chairs",
			},
			{
				id: "7",
				title: "Gaming Chairs",
				link: "/categories/office_chairs/gaming_chairs",
				tag: "gaming_chairs",
			},
		],
	},
	two_doors: {
		id: "5",
		tag: "two_doors",
		title: "Two doors",
		link: "/categories/two_doors",
		image: twoDoorsThin,
		items: [
			{
				id: "1",
				title: "Two-Door Cabinets",
				link: "/categories/two_doors/two_door_cabinets",
				tag: "two_door_cabinets",
			},
			{
				id: "2",
				title: "Double-Door Wardrobes",
				link: "/categories/two_doors/double_door_wardrobes",
				tag: "double_door_wardrobes",
			},
			{
				id: "3",
				title: "Bi-Fold Closet Doors",
				link: "/categories/two_doors/bi_fold_closet_doors",
				tag: "bi_fold_closet_doors",
			},
			{
				id: "4",
				title: "Sliding Barn Doors",
				link: "/categories/two_doors/sliding_barn_doors",
				tag: "sliding_barn_doors",
			},
			{
				id: "5",
				title: "Pantry Double Doors",
				link: "/categories/two_doors/pantry_double_doors",
				tag: "pantry_double_doors",
			},
			{
				id: "6",
				title: "French Entry Doors",
				link: "/categories/two_doors/french_entry_doors",
				tag: "french_entry_doors",
			},
			{
				id: "7",
				title: "Two-Door Refrigerators",
				link: "/categories/two_doors/two_door_refrigerators",
				tag: "two_door_refrigerators",
			},
		],
	},
	coat_racks: {
		id: "6",
		tag: "coat_racks",
		title: "Coat racks",
		link: "/categories/coat_racks",
		image: coatRack,
		items: [
			{
				id: "1",
				title: "Wall-Mounted Coat Racks",
				link: "/categories/coat_racks/wall_mounted_coat_racks",
				tag: "wall_mounted_coat_racks",
			},
			{
				id: "2",
				title: "Freestanding Coat Racks",
				link: "/categories/coat_racks/freestanding_coat_racks",
				tag: "freestanding_coat_racks",
			},
			{
				id: "3",
				title: "Coat Hooks",
				link: "/categories/coat_racks/coat_hooks",
				tag: "coat_hooks",
			},
			{
				id: "4",
				title: "Entryway Coat Trees",
				link: "/categories/coat_racks/entryway_coat_trees",
				tag: "entryway_coat_trees",
			},
			{
				id: "5",
				title: "Over-the-Door Coat Racks",
				link: "/categories/coat_racks/over_the_door_coat_racks",
				tag: "over_the_door_coat_racks",
			},
			{
				id: "6",
				title: "Coat Racks with Shelf",
				link: "/categories/coat_racks/coat_racks_with_shelf",
				tag: "coat_racks_with_shelf",
			},
			{
				id: "7",
				title: "Vintage Coat Racks",
				link: "/categories/coat_racks/vintage_coat_racks",
				tag: "vintage_coat_racks",
			},
		],
	},
}

export default function Categories() {
	const [selectedTag, setSelectedTag] = useState("")

	const containerRef = useRef<HTMLDivElement>(null)
	const ref = useClickOutside<HTMLDivElement>({
		handler: () => setSelectedTag(""),
		nodes: [containerRef.current],
	})

	const selectedCategory = useMemo(() => categories[selectedTag], [selectedTag])

	return (
		<div
			ref={containerRef}
			className='fixed right-0 top-0 z-20 h-screen bg-urbain-black'>
			<div className='flex h-full px-5 pb-16 pt-32'>
				{selectedTag !== "" && selectedCategory && (
					<div ref={ref} className='h-full w-96'>
						<SubCategories
							category={selectedCategory}
							key={selectedCategory.id}
						/>
					</div>
				)}

				<div className='flex flex-col items-end space-y-16'>
					{Object.values(categories).map(category => (
						<CategoryItem
							key={category.id}
							category={category}
							handleClick={categoryTag => setSelectedTag(categoryTag)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
