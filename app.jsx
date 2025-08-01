import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { WebsimSocket, useQuery } from "@websim/use-query";
const room = new WebsimSocket();
const CATEGORY_TEMPLATES = [
  "Games",
  "Utilities",
  "Art & Design",
  "Music & Audio",
  "Educational",
  "Social",
  "Productivity",
  "Entertainment",
  "News & Media",
  "Health & Fitness",
  "Travel",
  "Food & Drink",
  "Shopping",
  "Finance",
  "Weather",
  "Sports",
  "Photography",
  "Video",
  "Books & Reference",
  "Business",
  "Lifestyle",
  "Maps & Navigation",
  "Communication",
  "Developer Tools",
  "Science",
  "Interactive Fiction",
  "Simulations",
  "Puzzles",
  "Arcade",
  "Strategy",
  "RPG",
  "Adventure",
  "Action",
  "Racing",
  "Platform",
  "Shooter",
  "Creative Tools",
  "Data Visualization",
  "AI & Machine Learning"
];
function LoadingSkeleton() {
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-pulse", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "loading-skeleton h-6 w-48 rounded mb-4" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxDEV("div", { className: "loading-skeleton h-48 rounded-lg" }, i, false, {
      fileName: "<stdin>",
      lineNumber: 25,
      columnNumber: 21
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}
function ProjectCard({ project, site, onCategorize }) {
  const imageUrl = site ? `https://images.websim.com/v1/site/${site.id}/600` : null;
  return /* @__PURE__ */ jsxDEV("div", { className: "project-card rounded-lg p-4 cursor-pointer group", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "aspect-video bg-gray-800 rounded-lg mb-3 overflow-hidden", children: imageUrl ? /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: imageUrl,
        alt: project.title || "Project",
        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 39,
        columnNumber: 21
      },
      this
    ) : /* @__PURE__ */ jsxDEV("div", { className: "w-full h-full flex items-center justify-center text-gray-500", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-2xl mb-2", children: "\u{1F310}" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-sm", children: "No Preview" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 46,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 45,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-white truncate", children: project.title || "Untitled Project" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 text-sm text-gray-400", children: [
        /* @__PURE__ */ jsxDEV("span", { children: [
          "\u{1F440} ",
          project.stats?.views || 0
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 60,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: [
          "\u2764\uFE0F ",
          project.stats?.likes || 0
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 61,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: [
          "\u{1F4AC} ",
          project.stats?.comments || 0
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 62,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: `https://images.websim.com/avatar/${project.created_by?.username}`,
              alt: project.created_by?.username,
              className: "w-6 h-6 rounded-full"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 67,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-400", children: [
            "@",
            project.created_by?.username
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 72,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 66,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onCategorize(project);
            },
            className: "text-xs bg-indigo-600/20 hover:bg-indigo-600/30 px-2 py-1 rounded transition-colors",
            children: "Categorize"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 77,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 54,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 36,
    columnNumber: 9
  }, this);
}
function CategorySection({ category, projects, onSelectProject }) {
  if (!projects.length) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: "mb-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold gradient-text", children: category }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-400", children: [
        projects.length,
        " projects"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 99,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 97,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: projects.map((item) => /* @__PURE__ */ jsxDEV("div", { onClick: () => onSelectProject(item.project, item.site), children: /* @__PURE__ */ jsxDEV(
      ProjectCard,
      {
        project: item.project,
        site: item.site,
        onCategorize: () => onSelectProject(item.project, item.site)
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 105,
        columnNumber: 25
      },
      this
    ) }, item.project.id, false, {
      fileName: "<stdin>",
      lineNumber: 104,
      columnNumber: 21
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 102,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 96,
    columnNumber: 9
  }, this);
}
function CategorizationModal({ project, site, onClose, onSave }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [customCategory, setCustomCategory] = useState("");
  const [suggestedCategories, setSuggestedCategories] = useState([]);
  const { data: existingCategories } = useQuery(
    room.collection("project_categories").filter({ project_id: project.id })
  );
  useEffect(() => {
    const title = project.title?.toLowerCase() || "";
    const description = project.description?.toLowerCase() || "";
    const content = `${title} ${description}`;
    const suggestions = CATEGORY_TEMPLATES.filter((cat) => {
      const lowerCat = cat.toLowerCase();
      return content.includes(lowerCat.split(" ")[0]) || content.includes(lowerCat.split("&")[0]?.trim()) || lowerCat.includes("game") && (content.includes("play") || content.includes("game")) || lowerCat.includes("tool") && content.includes("tool") || lowerCat.includes("art") && (content.includes("draw") || content.includes("paint") || content.includes("create"));
    }).slice(0, 8);
    setSuggestedCategories(suggestions);
    if (existingCategories) {
      setSelectedCategories(existingCategories.map((cat) => cat.category_name));
    }
  }, [project, existingCategories]);
  const handleSave = async () => {
    const allCategories = [...new Set([...selectedCategories, customCategory].filter(Boolean))];
    if (existingCategories) {
      for (const existing of existingCategories) {
        await room.collection("project_categories").delete(existing.id);
      }
    }
    for (const category of allCategories) {
      await room.collection("project_categories").upsert({
        project_id: project.id,
        category_name: category,
        site_id: site?.id || null,
        created_by_user: (await window.websim.getCurrentUser()).username
      });
    }
    onSave();
    onClose();
  };
  const toggleCategory = (category) => {
    setSelectedCategories(
      (prev) => prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "glassmorphism rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold", children: "Categorize Project" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 185,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: onClose, className: "text-gray-400 hover:text-white", children: "\u2715" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 186,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 184,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV("h4", { className: "font-medium text-white mb-2", children: project.title }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 190,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400", children: project.description }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 191,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 189,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV("h4", { className: "font-medium text-white mb-3", children: "Suggested Categories" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 195,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: suggestedCategories.map((category) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => toggleCategory(category),
          className: `category-pill px-3 py-1 rounded-full text-sm ${selectedCategories.includes(category) ? "active" : ""}`,
          children: category
        },
        category,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 198,
          columnNumber: 29
        },
        this
      )) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 196,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 194,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV("h4", { className: "font-medium text-white mb-3", children: "All Categories" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 212,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: CATEGORY_TEMPLATES.filter((cat) => !suggestedCategories.includes(cat)).map((category) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => toggleCategory(category),
          className: `category-pill px-3 py-1 rounded-full text-sm ${selectedCategories.includes(category) ? "active" : ""}`,
          children: category
        },
        category,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 215,
          columnNumber: 29
        },
        this
      )) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 213,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 211,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block font-medium text-white mb-2", children: "Custom Category" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 229,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "text",
          value: customCategory,
          onChange: (e) => setCustomCategory(e.target.value),
          placeholder: "Enter a custom category...",
          className: "w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 230,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 228,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-3", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: handleSave,
          className: "flex-1 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition-colors",
          children: "Save Categories"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 240,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onClose,
          className: "px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors",
          children: "Cancel"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 246,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 239,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 183,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 182,
    columnNumber: 9
  }, this);
}
function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const { data: feedData, loading: feedLoading } = useQuery(
    room.query(`SELECT * FROM trending_feed LIMIT 50`)
  );
  const { data: projectCategories, loading: categoriesLoading } = useQuery(
    room.collection("project_categories")
  );
  const organizeProjectsByCategory = useCallback(async () => {
    if (feedLoading || categoriesLoading) return;
    try {
      const response = await fetch("/api/v1/feed/trending?limit=100");
      const trendingData = await response.json();
      const newCategories = { "All": [], "Uncategorized": [] };
      trendingData.feed.data.forEach((item) => {
        newCategories["All"].push(item);
      });
      if (projectCategories) {
        const categoryMap = {};
        projectCategories.forEach((cat) => {
          if (!categoryMap[cat.project_id]) {
            categoryMap[cat.project_id] = [];
          }
          categoryMap[cat.project_id].push(cat.category_name);
        });
        trendingData.feed.data.forEach((item) => {
          const projectCats = categoryMap[item.project.id];
          if (projectCats && projectCats.length > 0) {
            projectCats.forEach((catName) => {
              if (!newCategories[catName]) {
                newCategories[catName] = [];
              }
              newCategories[catName].push(item);
            });
          } else {
            newCategories["Uncategorized"].push(item);
          }
        });
      } else {
        newCategories["Uncategorized"] = [...newCategories["All"]];
      }
      await autoGenerateCategories(trendingData.feed.data, newCategories);
      setCategories(newCategories);
      setLoading(false);
    } catch (error) {
      console.error("Error organizing projects:", error);
      setLoading(false);
    }
  }, [feedLoading, categoriesLoading, projectCategories]);
  const autoGenerateCategories = async (projects, existingCategories) => {
    const autoCategories = {
      "Games": ["game", "play", "player", "score", "level", "arcade"],
      "Tools": ["tool", "utility", "helper", "generator", "converter"],
      "Art": ["art", "draw", "paint", "creative", "design", "visual"],
      "Music": ["music", "audio", "sound", "beat", "song", "instrument"],
      "Educational": ["learn", "education", "tutorial", "guide", "teach"],
      "Social": ["chat", "social", "community", "share", "connect"],
      "Interactive": ["interactive", "click", "hover", "animation", "dynamic"]
    };
    for (const [categoryName, keywords] of Object.entries(autoCategories)) {
      if (!existingCategories[categoryName]) {
        existingCategories[categoryName] = [];
      }
      projects.forEach((item) => {
        const title = item.project.title?.toLowerCase() || "";
        const description = item.project.description?.toLowerCase() || "";
        const content = `${title} ${description}`;
        const hasKeyword = keywords.some((keyword) => content.includes(keyword));
        if (hasKeyword && !existingCategories[categoryName].some((p) => p.project.id === item.project.id)) {
          existingCategories[categoryName].push(item);
        }
      });
    }
  };
  useEffect(() => {
    organizeProjectsByCategory();
  }, [organizeProjectsByCategory]);
  const handleSelectProject = (project, site) => {
    setSelectedProject(project);
    setSelectedSite(site);
    setShowModal(true);
  };
  const handleSaveCategories = () => {
    organizeProjectsByCategory();
  };
  const categoryNames = Object.keys(categories).sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    if (a === "Uncategorized") return 1;
    if (b === "Uncategorized") return -1;
    return a.localeCompare(b);
  });
  if (loading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxDEV(LoadingSkeleton, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 387,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 386,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "glassmorphism sticky top-0 z-40 mb-8", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold gradient-text", children: "Infinite Categories" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 398,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-400", children: [
          Object.keys(categories).length,
          " categories \u2022 ",
          categories[selectedCategory]?.length || 0,
          " projects"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 399,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 397,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2 overflow-x-auto pb-2", children: categoryNames.map((category) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setSelectedCategory(category),
          className: `category-pill px-4 py-2 rounded-full text-sm whitespace-nowrap ${selectedCategory === category ? "active" : ""}`,
          children: [
            category,
            " (",
            categories[category]?.length || 0,
            ")"
          ]
        },
        category,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 407,
          columnNumber: 29
        },
        this
      )) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 405,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 396,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 395,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "container mx-auto px-4 pb-12", children: [
      selectedCategory === "All" ? (
        // Show all categories as sections
        /* @__PURE__ */ jsxDEV("div", { className: "infinite-scroll", children: categoryNames.filter((cat) => cat !== "All" && categories[cat]?.length > 0).map((category) => /* @__PURE__ */ jsxDEV(
          CategorySection,
          {
            category,
            projects: categories[category],
            onSelectProject: handleSelectProject
          },
          category,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 427,
            columnNumber: 29
          },
          this
        )) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 425,
          columnNumber: 21
        }, this)
      ) : (
        // Show selected category
        /* @__PURE__ */ jsxDEV(
          CategorySection,
          {
            category: selectedCategory,
            projects: categories[selectedCategory] || [],
            onSelectProject: handleSelectProject
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 437,
            columnNumber: 21
          },
          this
        )
      ),
      categories[selectedCategory]?.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-6xl mb-4", children: "\u{1F4C2}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 446,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold mb-2", children: "No projects in this category yet" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 447,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "Start categorizing projects to see them here!" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 448,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 445,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 422,
      columnNumber: 13
    }, this),
    showModal && selectedProject && /* @__PURE__ */ jsxDEV(
      CategorizationModal,
      {
        project: selectedProject,
        site: selectedSite,
        onClose: () => setShowModal(false),
        onSave: handleSaveCategories
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 455,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 393,
    columnNumber: 9
  }, this);
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 467,
  columnNumber: 13
}));
