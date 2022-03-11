import * as React from "react";

import pages from "../constants/pages";

import { Pages } from "../constants/pages";

interface ContextProps {
  pages?: Pages;
}

const context: ContextProps = { pages };

const ConstantsContext = React.createContext(context);
export default ConstantsContext;
