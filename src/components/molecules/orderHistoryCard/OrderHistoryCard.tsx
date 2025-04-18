import React from "react";
import { OrderHistoryCardPropsType } from "@/components/types/type";
import BadgeTitle from "@/components/atoms/badgeTitle/BadgeTitle";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Icon from "@/components/atoms/icon/Icon";

const OrderHistoryCard: React.FC<
  OrderHistoryCardPropsType & {
    statusLabel: string;
    statusColor: string;
    buttons: string[];
  }
> = ({
  title,
  subtitle,
  // planDuration,
  itemName,
  planStartDate,
  planEndDate,
  // orderDate,
  price,
  note,
  noteDetails,
  processingNote,
  hasInvoice,
  pausedDuration,
  pausedPeriod,
  cancellationTitle,
  cancellationDate,
  statusLabel,
  statusColor,
  buttons,
  status,
}) => {
  return (
    <div className="break-inside-avoid rounded-xl border border-[#E4E7D3] bg-[#FDFFF4] p-4 sm:p-6  h-fit relative space-y-6 max-w-[345px]">
      {/* status */}
      <BadgeTitle
        label={statusLabel}
        color={statusColor}
        variant="squared"
        className="absolute -top-[.8px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap"
      />

      {/* pet name & invoice */}
      <div className="text-center mb-7">
        <Typography
          tag="h5"
          text={title}
          className="text-primary-dark font-medium text-lg"
        />
        {hasInvoice && (
          <Button variant={"nullBtn"} className="border mx-auto">
            <div className="w-5">
              <Image
                src="/icons/download.svg"
                alt="INVOICE"
                fill
                className="!static w-full object-contain"
              />
            </div>
            invoice
          </Button>
        )}
      </div>

      {status === "paused" && pausedDuration && pausedPeriod && (
        <div className=" rounded-lg border border-secondary-1 p-4 px-1 text-center relative ">
          <Typography
            tag="p"
            text={pausedDuration}
            className="absolute -top-[.8px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
          />
          <Typography
            tag="p"
            text={pausedPeriod}
            className="text-primary-dark font-bold block"
          />
        </div>
      )}

      {status === "cancelled" && cancellationTitle && cancellationDate && (
        <div className=" rounded-lg border border-secondary-1 p-4 px-1 text-center relative ">
          <Typography
            tag="p"
            text={cancellationTitle}
            className="absolute -top-[.8px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
          />
          <Typography
            tag="p"
            text={cancellationDate}
            className="text-primary-dark font-bold block"
          />
        </div>
      )}

      {/* meal item details */}
      <div className="rounded-lg border border-secondary-1 p-4 px-3 text-center relative ">
        <Typography
          tag="p"
          text={subtitle}
          className="absolute -top-[.8px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
        />
        <div className="flex justify-center items-center gap-1">
          <div className="w-7">
            <Image
              src="icons/chicken-vector-icon.svg"
              alt="Chicken"
              fill
              className="!static w-full object-contain"
            />
          </div>
          <Typography
            tag="h5"
            text={itemName}
            className="text-sm font-semibold text-primary-dark"
          />
        </div>

        {note && (
          <>
            <Button
              variant={"linkSecondary"}
              className="underline mt-2 whitespace-normal"
            >
              Change protein for my next order
            </Button>
            {noteDetails && (
              <Typography
                tag="p"
                text={noteDetails}
                className="mt-2 subtitle3"
              />
            )}
            {processingNote && (
              <Typography
                tag="p"
                text={processingNote}
                className="mt-4 subtitle3 text-[#818181]"
              />
            )}
          </>
        )}
      </div>

      {/* price section */}
      <div className="flex items-end">
        <div className="min-w-min">
          {/* Plan Start Date */}
          <div className="pb-1 border-b border-[#E4E7D3]">
            <Typography
              tag="p"
              text="Plan Start Date"
              className="subtitle3 text-black"
            />
            <Typography
              tag="p"
              text={planStartDate}
              className="bodyBtnText text-primary-dark"
            />
          </div>
          {/* Plan Renewal  Date */}
          <div className="pt-1">
            <Typography
              tag="p"
              text="Plan Renewal Date"
              className="subtitle3 text-black"
            />
            <Typography
              tag="p"
              text={planEndDate}
              className="bodyBtnText text-primary-dark"
            />
          </div>
        </div>
        {/* Order Price */}
        <div className="grow text-right">
          <Typography
            tag="p"
            text="Order Price"
            className="subtitle3 text-black"
          />
          <Typography
            tag="h5"
            text={`${price} QAR`}
            className="text-primary-dark"
          />
        </div>
      </div>

      {/*nav button */}
      {status === "current" ? (
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="col-span-2">
            <Button className="w-full " size="md">
              {buttons[0]} {/* Downgrade to Half-Bowl */}
            </Button>
          </div>
          <div className="col-span-1">
            <Button className="w-full" size="md">
              {buttons[1]} {/* Pause Plan */}
            </Button>
          </div>
          <div className="col-span-1">
            <Button className="w-full" size="md">
              {buttons[2]} {/* Cancel */}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 mt-4">
          {buttons.map((btn, i) => (
            <Button key={i} className="w-full" size="md">
              {btn}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryCard;
