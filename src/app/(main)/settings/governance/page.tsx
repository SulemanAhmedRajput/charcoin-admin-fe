"use client";
import { HeaderWrapper } from "@/components/custom/header-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import InputWithText from "@/components/ui/input-with-text";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Menu, Minus } from "@mynaui/icons-react";
import { PlusIcon } from "@radix-ui/react-icons";

const SettingsGovernance = () => {
  const [votingConfigs, setVotingConfigs] = useState([
    { id: "1", days: 30, votesPerToken: 0.5, maxReturn: 5 },
    { id: "2", days: 60, votesPerToken: 1, maxReturn: 7 },
    { id: "3", days: 120, votesPerToken: 3, maxReturn: 10 },
    { id: "4", days: 180, votesPerToken: 5, maxReturn: 15 },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setVotingConfigs((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div>
      <HeaderWrapper
        title={"Dapp Global Settings - Governance"}
        description={
          "Manage settings related to the governance of the CharCoin ecosystem"
        }
      />

      <div>
        <Card className="bg-background">
          <CardHeader className="space-y-0">
            <CardTitle className="text-xl">Main Setup</CardTitle>
            <p className="text-sm mt-0 text-muted-foreground">
              Voting and Staking Configuration
            </p>
          </CardHeader>
          <CardContent>
            <hr className="h-[2px] rounded-xl bg-muted-foreground mb-5" />

            <p className="font-bold text-lg">
              Causes / Projects compensation distribution factor
            </p>
            <p className="text-muted-foreground mb-4 text-sm">
              The distribution factor dynamically allocates donations based on
              the number of active causes within a campaign.
              <b>
                {" "}
                Currently, the ecosystem supports a maximum of 10
                causes/projects running on each campaign.
              </b>
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4 mb-12">
              {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <InputWithText
                  key={num}
                  label={`${num} participants`}
                  placeholder="Enter distribution values"
                />
              ))}
            </div>

            <HeaderWrapper
              title="Token Economy and Staking"
              description={
                "Manage the main logic setup for the governance system"
              }
            />
            <hr className="h-[2px] rounded-xl bg-muted-foreground mb-5" />
            <HeaderWrapper
              title="Voting power per staked token"
              description="Define how many votes each staked CHAR token grants (e.g., 1 CHAR = 1 vote, or scale based on staking duration)"
              size={"sm"}
            />

            {/* DnD Kit Implementation */}
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={votingConfigs.map((config) => config.id)}
                strategy={verticalListSortingStrategy}
              >
                {votingConfigs.map((config) => (
                  <SortableVotingCalculator key={config.id} config={config} />
                ))}
              </SortableContext>
            </DndContext>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Sortable Voting Calculator Component
function SortableVotingCalculator({ config }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: config.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-2 cursor-grab active:cursor-grabbing"
    >
      <VotingCalculator config={config} />
    </div>
  );
}

// Voting Calculator Component
function VotingCalculator({ config }) {
  const [days, setDays] = useState(config.days);
  const [votesPerToken, setVotesPerToken] = useState(config.votesPerToken);
  const [maxReturn, setMaxReturn] = useState(config.maxReturn);
  const [multiplier, setMultiplier] = useState(1553);
  const [factor, setFactor] = useState(26);

  return (
    <div className="flex items-center gap-4 max-sm:flex-col  rounded-lg">
      <Menu className="!w-5 !h-5 shrink-0" />
      {/* Days Input */}
      <Input
        type="number"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        placeholder="Days"
      />

      {/* Votes per Token */}
      <Input
        type="number"
        value={votesPerToken}
        onChange={(e) => setVotesPerToken(Number(e.target.value))}
        placeholder="Votes per Token"
      />

      {/* Calculation Display */}
      <div className=" px-4 py-2 whitespace-nowrap  rounded-md text-white">
        {multiplier} × {factor}
      </div>

      {/* Max Return */}
      <InputWithText
        label="Max Return"
        placeholder="Max Return"
        type="number"
        className="md:w-28 lg:w-40"
        rootClassName="flex-row-reverse"
        value={maxReturn}
        onChange={(e) => setMaxReturn(Number(e.target.value))}
      />

      {/* Percentage Label */}
      <span className="tw-text-gray-400">Percentage</span>

      {/* Increment/Decrement Buttons */}
      <div className="flex gap-2">
        <Button
          size={"icon"}
          variant={"outline"}
          className="size-7   rounded-full p-0"
          onClick={() => setFactor(factor + 1)}
        >
          <PlusIcon className="w-5 h-5" />
        </Button>
        <Button
          size={"icon"}
          variant={"outline"}
          className="size-7  rounded-full p-0"
          onClick={() => setFactor(factor - 1)}
        >
          <Minus className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

export default SettingsGovernance;
