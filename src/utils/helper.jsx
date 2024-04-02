import drop from "@/assets/icons/drop.svg";
import SearchIcon from "@mui/icons-material/Search";
import threeDot from "@/assets/icons/three-dots.svg";
import Image from "next/image";

export const downloadFile = (data, fileName) => {
  try {
    if (data?.status === "success") {
      const blob = new Blob([data.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      saveAs(blob, fileName);
    } else {
      console.error("Failed to download template.");
    }
  } catch (error) {
    console.error("Error during template download:", error);
  }
};

export const elementProvider = (e) => {
  switch (e?.type) {
    case "actionButton":
      return (
        <button key={e?.id} className={`${e?.className ?? ""} action-btn`}>
          {e?.image && (
            <Image className={`${e?.name}`} alt={e?.name} src={e?.imageSrc} />
          )}
          <span>{e?.label}</span>
          {e?.drop && <Image className={"drop"} src={drop} />}
        </button>
      );
    case "text":
      return (
        <p key={e?.id} className={`${e?.className ?? ""} text`}>
          {e?.label}
        </p>
      );

    case "divider":
      return (
        <div key={e?.id} className={`${e?.className ?? ""} divider`}></div>
      );
    case "more":
      return (
        <button className={`${e?.className ?? ""} action-btn three-dot`}>
          <Image className={"threeDot"} src={threeDot} />
        </button>
      );
    case "toggle-icons":
      return (
        <div key={e?.id} className={`${e?.className ?? ""} toggle-icons`}>
          {e?.children.map((e, i) => {
            return (
              <div
                className={`${e?.className ?? ""} ${
                  e?.active ? "active" : ""
                } icons`}
                key={i}
              >
                <Image src={e.imageSrc} />
              </div>
            );
          })}
        </div>
      );

    case "searchBar":
      return (
        <div className="search-div" key={e?.id}>
          <input className="search-placeholder" placeholder={e.placeholder} />
          <SearchIcon className="search-icon" />
        </div>
      );

    default:
      return null;
  }
};

export const pathHandler = (path, data, value = 2) => {
  const url = path;
  const parts = url.split("/");
  const textAfterSecondSlash = parts[value];

  // console.log(textAfterSecondSlash,data,value)

  if (path) {
    const result = data === textAfterSecondSlash;
    return result;
  }
  return;
};

export const handleData = (obj, data) => {
  return data?.map((item) => ({
    ...item,
    [obj?.key]: item.id === obj?.id ? obj?.value : item,
    [obj?.child]: [obj?.child] ? handleData(obj?.id, item?.[obj?.child]) : null,
  }));
};

export const handleActive = (listData, id, callback) => {
  const updatedData = listData.map((item) => {
    if (item?.id === id) {
      return { ...item, active: !item?.active };
    } else if (item?.children) {
      const updatedChildren = item?.children.map((child) => {
        if (child?.id === id) {
          return { ...child, active: !child?.active };
        } else if (child?.children) {
          return { ...child, active: true };
        } else {
          return { ...child, active: false };
        }
      });
      return { ...item, children: updatedChildren };
    }
    return item;
  });
  callback(updatedData);
};

export const primaryDataHandler = (data, index) => {
  if (data) {
    return data[index]?.data;
  } else {
    return [];
  }
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const switchItems = (array,currentIndex, newIndex) => {
  // Make sure the indices are within the bounds of the array
  if (
    currentIndex < 0 ||
    currentIndex >= array.length ||
    newIndex < 0 ||
    newIndex >= array.length
  ) {
    console.error("Invalid indices provided.");
    return array; // Return the original array if indices are invalid
  }

  // Remove the item from the current position
  const itemToMove = array.splice(currentIndex, 1)[0];

  // Insert the item at the new position
  array.splice(newIndex, 0, itemToMove);

  return array; // Return the modified array
};
