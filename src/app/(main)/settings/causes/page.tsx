"use client";
import { HeaderWrapper } from "@/components/custom/header-wrapper";
import { CustomSheet } from "@/components/reuseable/add-causes-sheet";
import { AddCategory } from "@/components/settings/add-category";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import useDialogStore from "@/stores/dialog-store";
import { HeartPlus, DropSolid, Cookie, Drop, Activity, AcademicHat, Accessibility, ArrowRight } from "@mynaui/icons-react";

const categories = [
  {
    name: "Disaster Relief Assistance",
    projects: 0,
    news: 10,
    icon: HeartPlus,
    color: "#D83A3A",
  },
  { name: "Food Security & Nutrition", projects: 0, news: 8, icon: Cookie, color: "#843AD8" },
  { name: "Clean Water & Sanitation", projects: 0, news: 5, icon: Drop, color: "#D83AC8" },
  {
    name: "Medical & Healthcare Support",
    projects: 0,
    news: 12,
    icon: AcademicHat,
    color: "#B8D83A"
  },
  {
    name: "Education & Literacy Programs",
    projects: 10,
    news: 12,
    icon: Accessibility,
    color: "#3DD83A"
  },

];

const campaigns = [
  {
    name: "May 2025",
    duration: "From May 1 to May 20, 2025",
    status: "Upcoming",
    icon: HeartPlus,

  },
  {
    name: "April 2025",
    duration: "From April 1 to April 20, 2025",
    status: "Upcoming",
    icon: HeartPlus,
  },
  {
    name: "March 2025",
    duration: "From March 1 to March 20, 2025",
    status: "Current",
    icon: HeartPlus,
  },
  {
    name: "February 2025",
    duration: "From February 1 to February 20, 2025",
    icon: HeartPlus,
  },
  {
    name: "January 2025",
    duration: "From January 1 to January 30, 2025",
    icon: HeartPlus,
  },
  {
    name: "Annual Campaign, 2024",
    duration:
      "Special campaign considering all people and causes/projects that participated in the year.",
    icon: HeartPlus,
  },
  {
    name: "December 2024",
    duration: "From December 1 to December 30, 2025",
    icon: HeartPlus,
  },
  {
    name: "November 2025",
    duration: "From November 1 to November 20, 2025",
    icon: HeartPlus,
  },
  {
    name: "October 2025",
    duration: "From October 1 to October 20, 2025",
    icon: HeartPlus,
  },
];

const SettingsCauses = () => {
  const { openDialog, setAddCategory, setEditCategory } = useDialogStore()



  return (
    <div>
      <HeaderWrapper
        title="Dapp Global Settings - Causes"
        description="Manage settings related to the causes / projects in the CharCoin ecosystem"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 max-md:p-0  text-white min-h-screen">
        {/* Categories Section */}
        <Card className="bg-background">
          <CardHeader >
            <CardTitle className="text-xl">Categories</CardTitle>
            <p className="text-sm text-gray-400">
              Manage the categories available for the causes/projects and news
              sections
            </p>
            <Button size={"lg"} endIcon={ArrowRight} iconProps={{
              className: "!w-5 !h-5"
            }} className="w-max"
            onClick={() => setAddCategory(true)}
            >
              Add new
            </Button>
          </CardHeader>
          <CardContent>
            <hr />
            <ScrollArea className="h-[540px]">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex justify-between space-x-4  p-3 border-b "
                >
                  <div className={cn("min-w-[3px]   rounded-xl ",)} style={{
                    backgroundColor: category.color
                  }} />
                  <div className="flex items-center gap-3">
                    <category.icon size={40} />
                  </div>
                  <div className="w-full flex flex-col">
                    <span>{category.name}</span>
                    <span className="text-gray-400">
                      {category.projects} projects, {category.news} news
                    </span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Campaigns Section */}
        <Card className="bg-background">
          <CardHeader >
            <CardTitle className="text-xl">Categories</CardTitle>
            <p className="text-sm text-gray-400">
              Manage the categories available for the causes/projects and news
              sections
            </p>
            <Button size={"lg"} endIcon={ArrowRight} iconProps={{
              className: "!w-5 !h-5"
            }} className="w-max"
            onClick={() => setAddCategory(true)}

            >
              Add new
            </Button>
          </CardHeader>
          <CardContent>
            <hr />
            <ScrollArea className="h-[540px]">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex justify-between space-x-4 items-center p-3 border-b "
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="text-teal-400" size={40} />
                  </div>
                  <div className="w-full flex flex-col">
                    <span>{category.name}</span>
                    <span className="text-gray-400">
                      {category.projects} projects, {category.news} news
                    </span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      <CustomSheet
        isOpen={openDialog == "add_category"}
        setIsOpen={setAddCategory}
        title="Add Category form"
        className="pt-2 px-4"
      >
        <AddCategory />
      </CustomSheet>
      <CustomSheet
        isOpen={openDialog == "edit_category"}
        setIsOpen={setEditCategory}
        title="Edit Cateogyr form"
        className="pt-2 px-4"
      >
        abc
      </CustomSheet>
    </div>
  );
};

export default SettingsCauses;
