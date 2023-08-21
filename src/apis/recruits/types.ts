export interface RecruitItem {
  id: number
  bookmark: boolean
  image: string
  title: string
  skills: string[]
  appeal: string
  matching_keyword: string
  review: string
  reward: number
  reward_text: string
  job_applicant_type: string
  fee: string
  company: {
    id: number
    logo: string
    name: string
    grade: number
    grade_count: number
    ratings: { type: string; rating: number }[]
  }
  created_at: string
  updated_at: string
}

export interface RecruitResponse {
  data: {
    total_count: number
    recruits: RecruitItem[]
  }
}
