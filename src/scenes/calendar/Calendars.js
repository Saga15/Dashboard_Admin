import "smart-webcomponents-react/source/styles/smart.default.css";
import React from "react";

import { Scheduler } from "smart-webcomponents-react/scheduler";
import Subsidebar from "../global/Subdrawer";

class Calendars extends React.Component {
  constructor(props) {
    super(props);

    this.scheduler = React.createRef();
    this.calendar = React.createRef();
    this.tree = React.createRef();
    this.primaryContainer = React.createRef();

    const today = new Date(),
      currentDate = today.getDate(),
      currentYear = today.getFullYear(),
      currentMonth = today.getMonth(),
      currentHours = today.getHours(),
      currentMinutes = today.getMinutes(),
      thanksgiving = (() => {
        const tempDate = new Date(currentYear, 10, 1);
        tempDate.setDate(tempDate.getDate() - tempDate.getDay() + 25);
        return tempDate;
      })();

    this.nonworkingDays = this.getPastThreeWeekdays(today.getDay());
  }

  view = "month";

  views = [
    "day",
    {
      type: "week",
      hideWeekend: true,
    },
    {
      type: "month",
      hideWeekend: true,
    },
    "agenda",
    {
      label: "4 days",
      value: "workWeek",
      type: "week",
      shortcutKey: "X",
      hideWeekend: false,
      hideNonworkingWeekdays: true,
    },
  ];

  firstDayOfWeek = 1;

  disableDateMenu = true;

  currentTimeIndicator = true;

  scrollButtonsPosition = "far";

  getPastThreeWeekdays(weekday) {
    let weekdays = [];

    for (let i = 0; i < 3; i++) {
      weekdays.push((weekday - i + 7) % 7);
    }

    return weekdays;
  }

  updateData(event) {
    const item = event.detail.item,
      data = this.data;

    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];

      if (dataItem.label === item.label && dataItem.class === item.class) {
        event.type === "itemRemove"
          ? this.data.splice(i, 1)
          : data.splice(i, 1, item);
        return;
      }
    }
  }
  handleToggle() {
    const primaryContainer = this.primaryContainer.current,
      scheduler = this.scheduler.current;

    primaryContainer.classList.toggle("collapse");
    scheduler.disableDateMenu =
      !primaryContainer.classList.contains("collapse");
  }

  addNew() {
    this.scheduler.current.openWindow({
      class: "event",
    });
  }

  handleCalendarChange(event) {
    this.scheduler.current.dateCurrent = event.detail.value;
  }

  handleTreeChange() {
    const tree = this.tree.current;
    let selectedIndexes = tree.selectedIndexes,
      types = [];

    for (let i = 0; i < selectedIndexes.length; i++) {
      tree.getItem(selectedIndexes[i]).then((result) => {
        types.push(result.value);

        if (i === selectedIndexes.length - 1) {
          this.scheduler.current.dataSource = this.data.filter(
            (d) => types.indexOf(d.class) > -1
          );
        }
      });
    }
  }

  handleDateChange(event) {
    this.calendar.current.selectedDates = [event.detail.value];
  }

  init() {}

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div style={{ marginLeft: "30px" }}>
        <div id="primaryContainer" ref={this.primaryContainer}>
          <div className="content">
            <section id="sideB">
              <Scheduler
                style={{ backgroundColor: "red" }}
                ref={this.scheduler}
                id="scheduler"
                dataSource={this.data}
                view={this.view}
                views={this.views}
                nonworkingDays={this.nonworkingDays}
                firstDayOfWeek={this.firstDayOfWeek}
                disableDateMenu={this.disableDateMenu}
                currentTimeIndicator={this.currentTimeIndicator}
                scrollButtonsPosition={this.scrollButtonsPosition}
                onDragEnd={this.updateData.bind(this)}
                onResizeEnd={this.updateData.bind(this)}
                onItemUpdate={this.updateData.bind(this)}
                onItemRemove={this.updateData.bind(this)}
                onDateChange={this.handleDateChange.bind(this)}
              ></Scheduler>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendars;
