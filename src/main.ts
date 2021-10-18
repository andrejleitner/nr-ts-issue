import {recordMetric} from "newrelic";

setInterval(() => recordMetric('SampleTestMetric', 123), 8 * 1000);
