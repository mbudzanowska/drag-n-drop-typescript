import _ from "lodash";
console.log(_.shuffle([1,2,3]));

declare var GLOBAL: string;
console.log(GLOBAL);

import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');