export interface Test {
  CHILDREN?: Test[];
  DURATION?: string;
  DEPTH_LEVEL: string;
  ID: number;
  NAME: string;
  PARENT_SECTION_ID?: string;
  SORT: string;
  TYPE: 'folder' | 'item';
  url?: string;
}

export interface ResponseTest {
  error: string;
  errorStr: string;
  result: {
    testsTree: Test[];
  }
}
