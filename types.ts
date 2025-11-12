
export interface ResourceLink {
  name: string;
  url: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  resources: ResourceLink[];
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  steps: RoadmapStep[];
}
