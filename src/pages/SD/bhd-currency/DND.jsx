import React, { useState } from "react";
import Card from "./Card";
import { dndData } from "@/utils/mainData";
import { switchItems } from "@/utils/helper";
import { LuDot } from "react-icons/lu";

const DragAndDrop = () => {
  const [columns, setColumns] = useState(dndData);
  const [draggedItem, setDraggedItem] = useState(null);
  const [cardDrop, setCardDrop] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const cardDropHandle = (e, item) => {
    const { column, card, cardIndex } = item;
    const orderData = switchItems(
      column.cards,
      draggedItem?.cardIndex,
      cardIndex
    );

    // switchItems(column.cards,)

    const draggedCard = columns.map((data, index) =>
      index === draggedItem.columnIndex
        ? {
            ...data,
            cards: orderData,
          }
        : { ...data }
    );

    setColumns(draggedCard);
  };

  const handleDrop = (e, targetColumnIndex) => {
    if (draggedItem.columnIndex !== targetColumnIndex) {
      const draggedCard = columns.map((data, index) =>
        index === draggedItem.columnIndex
          ? {
              ...data,
              cards: data?.cards?.filter(
                (value) => value.id !== draggedItem.id
              ),
            }
          : index === targetColumnIndex
          ? {
              ...data,
              cards: [...data?.cards, draggedItem.card],
            }
          : { ...data }
      );

      setColumns(draggedCard);
    }
  };
  return (
    <div className="column-container">
      {columns?.map((column, columnIndex) => (
        <div
          key={columnIndex}
          onDrop={(e) => handleDrop(e, columnIndex)}
          onDragOver={(e) => e.preventDefault()}
          className={`column${columnIndex + 1} column`}
        >
           <div style={{ paddingLeft: "15px", marginTop: "10px" }}>
          <p   style={{ marginBottom: "0", fontSize: "16px", fontWeight: 600 }}>{column?.title}</p>
          <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                  gap: "10px",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: 500 }}>BHD 99,200</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ marginTop: "5px" }}>
                    <LuDot />
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: 500 }}>
                    2 Pipelines
                  </p>
                </div>
              </div>

              </div>
          <div className="drop-zone">
            {column?.cards?.map((card, index) => (
              <Card
                key={columnIndex}
                onDragStart={handleDragStart}
                cardDrop={cardDropHandle}
                card={card}
                column={column}
                columnIndex={columnIndex}
                cardIndex={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;

