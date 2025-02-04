import { Location, VariableMapping } from "@replayio/protocol";

import { ReplayClientInterface } from "shared/client/types";

import { createGenericCache } from "./createGenericCache";

export const {
  getValueSuspense: getScopeMapSuspense,
  getValueAsync: getScopeMapAsync,
  getValueIfCached: getScopeMapIfCached,
} = createGenericCache<
  [replayClient: ReplayClientInterface],
  [location: Location],
  VariableMapping[] | undefined
>(
  "ScopeMapCache: getScopeMap",
  (location, client) => client.getScopeMap(location),
  location => `${location.sourceId}:${location.line}:${location.column}`
);
