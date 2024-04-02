import React from "react";
import useRouterPush from "@/hooks/routerUtils";
import { AiFillRightCircle } from "react-icons/ai";

const Card = ({
  columnIndex,
  onDragStart,
  card,
  cardDrop,
  cardIndex,
  column,
}) => {
  const push = useRouterPush();

  const handleNavigate = () => {
    push("/SD/bhd-currency/lead");
  };

  return (
    <div
      draggable
      onDragStart={(e) =>
        onDragStart(e, { id: card.id, columnIndex, card, cardIndex })
      }
      onDragOver={(e) => e.preventDefault()}
      onClick={handleNavigate}
      className="card"
      key={columnIndex}
      onDrop={(e) =>
        cardDrop(e, { columnIndex, cardIndex: cardIndex, card, column })
      }
    >

      <p style={{ marginBottom: "0", fontSize: "14px", fontWeight: 600 }}>{card?.leadName}</p>
      <div className="card-body"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "1rem",
          marginTop: "8px",
        }}>
           <p style={{ fontSize: "12px", fontWeight: 500 }}> John Doe</p>
           <AiFillRightCircle style={{ color: "green" }} />
      </div>
      <div style={{ display: "flex" }}>
        <div className="logo-j">
          {" "}
          J
        </div>
        <p
          className="logo-amount"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(101, 104, 111, 1)",
            marginTop: "7px",
          }}
        >
          {card?.amount}
        </p>
      </div>

    </div>
  );
};

export default Card;
