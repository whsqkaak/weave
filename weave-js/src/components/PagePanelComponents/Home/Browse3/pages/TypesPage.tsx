import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {useWeaveflowCurrentRouteContext} from '../context';

export const TypesPage: React.FC<{
  entity: string;
  project: string;
}> = props => {
  // TODO: Implement in due time if needed
  const routerContext = useWeaveflowCurrentRouteContext();

  const history = useHistory();
  useEffect(() => {
    history.push(routerContext.projectUrl(props.entity, props.project));
  }, [routerContext, history, props.entity, props.project]);
  return <></>;
};
