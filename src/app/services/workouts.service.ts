import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  private baseUrl = environment.backendApi

  constructor(private http: HttpClient) { }

  getWorkouts() {
    return this.http.get<any[]>(`${this.baseUrl}/workouts`)
  }

  getWorkout(id) {
    return this.http.get<any>(`${this.baseUrl}/workouts/${id}`)
  }

  addWorkout(workout: any) {
    return this.http.post<any>(`${this.baseUrl}/workouts`, workout)
  }

  updateWorkout(workout: any) {
    return this.http.put<any>(`${this.baseUrl}/workouts/${workout.id}`, workout)
  }

  saveWorkout(workout: any) {
    if (workout.id) {
      return this.updateWorkout(workout)
    } else {
      return this.addWorkout(workout)
    }
  }

  deleteWorkout(id) {
    return this.http.delete(`${this.baseUrl}/workouts/${id}`);
  }

  searchLocations(searchTerm) {
    return this.http.get<any[]>(`${this.baseUrl}/locations?q=${searchTerm}`);
  }

  getPerfTargets() {
    return this.http.get(`${this.baseUrl}/performanceTargets`);
  }

  savePerfTargets(perfTargets: any) {
    return this.http.put(`${this.baseUrl}/performanceTargets`, perfTargets);
  }
}

