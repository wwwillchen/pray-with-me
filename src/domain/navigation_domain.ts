import { NavigationScreenProp } from "react-navigation";

export interface NavigationState {
  readonly params: {};
}

type Navigation = NavigationScreenProp<NavigationState, {}>;

export interface NavigationProps {
  readonly navigation: Navigation;
}
