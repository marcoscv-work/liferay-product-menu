import React from "react";
import Menu from "./Menu";
import Panel from "./Panel";
import { CSSTransition } from "react-transition-group";
import { cmContext } from "./cmContext";
import "./CM.scss";

class CM extends React.Component {
  state = {
    parent: false,
    children: false
  };

  content = [
    {
      parent: {
        title: "Sites",
        icon: "./logo-site.svg"
      },
      children: [
        {
          title: "Your Sites",
          icon: "sites"
        },
        {
          title: "Pages",
          icon: "page"
        },
        {
          title: "Site Builder",
          icon: "edit-layout"
        },
        {
          title: "Content & Data",
          icon: "text"
        },
        {
          title: "Site Configuration",
          icon: "control-panel"
        },
        {
          title: "Liferay Control Panel",
          icon: "cog"
        }
      ]
    },
    {
      parent: {
        title: "DXP",
        icon: "./logo-dxp.svg"
      },
      children: [
        {
          title: "Applications",
          icon: "grid"
        },
        {
          title: "Effects",
          icon: "effects"
        },
        {
          title: "Tag",
          icon: "tag"
        },
        {
          title: "Cog",
          icon: "cog"
        }
      ]
    },
    {
      parent: {
        title: "Settings",
        icon: "./logo-settings.svg"
      },
      children: [
        {
          title: "Your Sites",
          icon: "sites"
        },
        {
          title: "Pages",
          icon: "page"
        },
        {
          title: "Site Builder",
          icon: "edit-layout"
        },
        {
          title: "Content & Data",
          icon: "text"
        },
        {
          title: "Site Configuration",
          icon: "control-panel"
        },
        {
          title: "Liferay Control Panel",
          icon: "cog"
        }
      ]
    }
  ];

  render() {
    let childrenCurrent = this.state.children;
    let buttonToggleLabel = "Toggle Control Menu";

    console.log(this.state.parent);
    console.log(childrenCurrent);

    return (
      <cmContext.Provider
        value={{
          contextSetChildren: childrenNew =>
            this.setState({ children: childrenNew }),
          contextSetParent: parentNew => this.setState({ parent: parentNew }),
          contextStatus: childrenCurrent
        }}
      >
        <div
          className={
            "cm" +
            (childrenCurrent === buttonToggleLabel
              ? " cm-deactive"
              : childrenCurrent
              ? " cm-active"
              : "")
          }
        >
          <Menu
            className={"cm-toggle"}
            children={buttonToggleLabel}
            menuLabel={buttonToggleLabel}
            menuIcon={"angle-left"}
          />

          <CSSTransition
            in={childrenCurrent !== buttonToggleLabel}
            timeout={{ enter: 0, exit: 300 }}
            classNames={{
              enterDone: "cm-open"
            }}
            unmountOnExit
          >
            <div className="cm-bar">
              <ul className="cm-menu">
                {this.content.map((contentItem, index) => {
                  return (
                    <li key={index}>
                      <Menu
                        parent={contentItem.parent.title}
                        menuLabel={contentItem.parent.title}
                        menuIcon={contentItem.parent.icon}
                      />

                      <CSSTransition
                        in={this.state.parent === contentItem.parent.title}
                        timeout={{ enter: 0, exit: 300 }}
                        classNames={{
                          enterDone: "cm-open"
                        }}
                        unmountOnExit
                      >
                        <ul className="cm-submenu">
                          {contentItem.children.map(
                            (contentItemChildren, index) => {
                              return (
                                <li key={index}>
                                  <Menu
                                    parent={contentItem.parent.title}
                                    children={contentItemChildren.title}
                                    menuLabel={contentItemChildren.title}
                                    menuIcon={contentItemChildren.icon}
                                  />

                                  <Panel
                                    panelLabel={contentItemChildren.title}
                                  />
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </CSSTransition>
                    </li>
                  );
                })}
              </ul>
            </div>
          </CSSTransition>
        </div>
      </cmContext.Provider>
    );
  }
}

CM.contextType = cmContext;

export default CM;
